import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormFields } from './form.interface'
import Checkbox from '../../components/checkbox/checkboxone'
import {
    ConstructorForm,
    File,
    FileButton,
    FileInput,
    FilePreview,
    FormButton,
    FormInput,
    FormItem,
    FormLabel,
    TextArea,
} from './form.style'
import axios from 'axios'
import FormSelector from '../../components/selectors/selectors'

const Form: React.FC = () => {
    const [formitems, setIngredients] = useState(null)
    useEffect(() => {
        axios.get('/api/constructor/formitems').then((result) => {
            setIngredients(result.data)
            console.log(result.data)
        })
    }, [])

    if (!formitems) {
        return <>Данные еще не загружены</>
    }
    return <FormContent formitems={formitems} />
}

export default Form

const FormContent = ({ formitems }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        getValues,
        getFieldState,
        watch,
    } = useForm<FormFields>({
        mode: 'onChange',
        defaultValues: {
            selector1: formitems?.cakeshape[0].name,
            selector2: formitems?.cakesweight[0].name,
        },
    })
    watch('file')
    const file = getValues('file')?.[0]
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        alert(`Благодарим за отправку данных ${data.name}!`)
        console.log('values', data.file)
        console.log('field state', getFieldState('name'))
        reset()
    }
    console.log({ errors })
    console.log(getValues('file'))
    return (
        <ConstructorForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                    <FormLabel>Выберете форму торта:</FormLabel>
                    <FormSelector
                        {...register('selector1', {
                            required: 'error message',
                        })}
                        options={formitems.cakeshape}
                        id={formitems.cakeshape.id}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel>Выберете размер торта:</FormLabel>
                    <FormSelector
                        {...register('selector2', {
                            required: 'error message',
                        })}
                        options={formitems.cakesweight}
                        id={formitems.cakesweight.id}
                    />
                </FormItem>
                <FormLabel>Выберите начинку:</FormLabel>
                <FormItem>
                    {formitems.ingredients.map((ingredients) => {
                        return (
                            <Checkbox
                                key={ingredients.id}
                                id={ingredients.id}
                                lableTxt={ingredients.name}
                            />
                        )
                    })}
                </FormItem>
                <FormItem>
                    <FormLabel>Пожелания по оформлению</FormLabel>
                    <TextArea
                        name="Message"
                        id="formMessage2"
                        placeholder="Белый торт с цифрами, на день рождения"
                    ></TextArea>
                </FormItem>
                <FormItem>
                    <FormLabel>
                        Прикрепите примеры оформления (если есть)
                    </FormLabel>
                    <div>
                        <File>
                            <FileInput
                                {...register('file', {
                                    required:
                                        'Данное поле является обязательным!',
                                })}
                                name="file"
                                accept=".jpg, .png, .gif"
                                type="file"
                            />
                            {errors?.name && (
                                <div style={{ color: 'red' }}>
                                    {errors.file.message}
                                </div>
                            )}
                            <FileButton>Выбрать</FileButton>
                        </File>
                        <FilePreview>{file?.name}</FilePreview>
                    </div>
                </FormItem>
                <FormItem>
                    <FormLabel>ФИО*</FormLabel>
                    <FormInput
                        {...register('name', {
                            required: 'Данное поле является обязательным!',
                        })}
                        name="name"
                        type="text"
                        placeholder="Введите ваши ФИО"
                    />
                    {errors?.name && (
                        <div style={{ color: 'red' }}>
                            {errors.name.message}
                        </div>
                    )}
                </FormItem>
                <FormItem>
                    <FormLabel>E-mail*</FormLabel>
                    <FormInput
                        {...register('email', {
                            required: 'Данное поле является обязательным!',
                            pattern: {
                                value: /.+@.+\..+/i,
                                message:
                                    'Введите действительный адрес электронной почты!',
                            },
                        })}
                        name="email"
                        type="text"
                        placeholder="Введите ваш e-mail"
                    />
                    {errors?.email && (
                        <div style={{ color: 'red' }}>
                            {errors.email.message}
                        </div>
                    )}
                </FormItem>
                <FormItem>
                    <FormLabel>Телефон*</FormLabel>
                    <FormInput
                        {...register('phone', {
                            required: 'Данное поле является обязательным!',
                            minLength: {
                                value: 11,
                                message: 'В поле должно быть 11 цифр',
                            },
                            pattern: {
                                value: /[0-9]/,
                                message: 'Поле должно содержать только цифры!',
                            },
                        })}
                        name="phone"
                        type="number"
                        placeholder="+7 917 999-99-99"
                    />
                    {errors?.phone && (
                        <div style={{ color: 'red' }}>
                            {errors.phone.message}
                        </div>
                    )}
                </FormItem>
                <FormButton type="submit" disabled={!isValid}>
                    Отправить
                </FormButton>
            </form>
        </ConstructorForm>
    )
}
