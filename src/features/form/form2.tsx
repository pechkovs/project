import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form'
import { FormFields, FormItems } from './form.interface'
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

const Form2: React.FC = () => {
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

export default Form2

type FormContentProps = {
    formitems: FormItems
}

// eslint-disable-next-line react/prop-types
const FormContent: React.FC<FormContentProps> = ({ formitems }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        watch,
        control,
    } = useForm<FormFields>({
        mode: 'onChange',
        defaultValues: {
            selector1: formitems?.cakeshape[0].name,
            selector2: formitems?.cakesweight[0].name,
            checkbox1: formitems?.ingredients,
        },
    })
    const { fields } = useFieldArray({
        control,
        name: 'checkbox1',
        rules: {
            validate: {
                require: (v) => {
                    if (v.some((i) => i.checked)) return true
                    return 'Необходимо выбрать хотя бы одну начинку'
                },
            },
        },
    })
    watch('file')
    const file = getValues('file')?.[0]
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        alert(`Благодарим за отправку данных ${data.name}!`)
        reset()
    }
    const checkbox1Error = errors.checkbox1?.root
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
                    />
                </FormItem>
                <FormItem>
                    <FormLabel>Выберете размер торта:</FormLabel>
                    <FormSelector
                        {...register('selector2', {
                            required: 'error message',
                        })}
                        options={formitems.cakesweight}
                    />
                </FormItem>
                <FormLabel>Выберите начинку:</FormLabel>
                <FormItem>
                    {fields.map((ingredients, index) => {
                        return (
                            <Checkbox
                                inputProps={register(
                                    `checkbox1.${index}.checked`
                                )}
                                key={ingredients.id}
                                lableTxt={ingredients.name}
                            />
                        )
                    })}
                    {checkbox1Error?.message && (
                        <div style={{ color: 'red' }}>
                            {checkbox1Error.message}
                        </div>
                    )}
                </FormItem>
                <FormItem>
                    <FormLabel>Пожелания по оформлению</FormLabel>
                    <TextArea
                        {...register('message', {
                            maxLength: {
                                value: 200,
                                message:
                                    'Cообщение не должно превышать 200 символов',
                            },
                        })}
                        placeholder="Белый торт с цифрами, на день рождения"
                    />
                    {errors?.message && (
                        <div style={{ color: 'red' }}>
                            {errors.message.message}
                        </div>
                    )}
                </FormItem>
                <FormItem>
                    <FormLabel>Прикрепите примеры оформления</FormLabel>
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
                            {errors?.file && (
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
                <FormButton type="submit">Отправить</FormButton>
            </form>
        </ConstructorForm>
    )
}
