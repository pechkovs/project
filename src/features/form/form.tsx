import React from 'react'
import Checkbox from '../../components/checkbox/checkboxitem'
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
    Select,
    TextArea,
} from './form.style'

const Form = () => {
    return (
        <ConstructorForm>
            <form /*class="form__body"*/>
                <FormItem>
                    <FormLabel>Выберете форму торта:</FormLabel>
                    <Select>
                        <option value="1.5 кг" selected>
                            Круг
                        </option>
                        <option value="2 кг">Квадрат</option>
                        <option value="3 кг">Прямоугольник</option>
                        <option value="4 кг">Овал</option>
                        <option value="5 кг">Сложной формы</option>
                    </Select>
                </FormItem>
                <FormItem>
                    <FormLabel>Выберете размер торта:</FormLabel>
                    <Select>
                        <option value="1.5 кг" selected>
                            1.5 кг
                        </option>
                        <option value="2 кг">2 кг</option>
                        <option value="3 кг">3 кг</option>
                        <option value="4 кг">4 кг</option>
                        <option value="5 кг">5 кг</option>
                        <option value="6 кг">6 кг</option>
                        <option value="7 кг">7 кг</option>
                    </Select>
                </FormItem>
                <FormLabel>Выберите начинку:</FormLabel>
                <FormItem>
                    <Checkbox id="ch1" lableTxt={'Ванильный с клубникой'} />
                    <Checkbox id="ch2" lableTxt={'Лавандовый'} />
                    <Checkbox
                        id="ch3"
                        lableTxt={'Шоколадный с солёной карамелью и орехами'}
                    />
                    <Checkbox id="ch4" lableTxt={'Шоколадный трюфель'} />
                    <Checkbox id="ch5" lableTxt={'Красный бархат с вишней'} />
                    <Checkbox id="ch6" lableTxt={'Фисташка-малина'} />
                    <Checkbox
                        id="ch7"
                        lableTxt={'Морковный с облепиховой прослойкой'}
                    />
                    <Checkbox id="ch8" lableTxt={'Груша-дорблю'} />
                    <Checkbox
                        id="ch9"
                        lableTxt={'Классический медовый с клюквой'}
                    />
                    <Checkbox id="ch10" lableTxt={'Шоколадный медовый'} />
                    <Checkbox id="ch11" lableTxt={'Наполеон'} />
                    <Checkbox id="ch12" lableTxt={'Тропический'} />
                    <Checkbox id="ch13" lableTxt={'Маковый'} />
                    <Checkbox id="ch14" lableTxt={'Павлова'} />
                    <Checkbox id="ch15" lableTxt={'Чизкейк Нью-Йорк'} />
                    <Checkbox
                        id="ch16"
                        lableTxt={'Чизкейк Нью-Йорк с соленой карамелью'}
                    />
                    <Checkbox id="ch17" lableTxt={'Чизкейк Сникерс'} />
                    <Checkbox id="ch18" lableTxt={'Баноффи'} />
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
                                id="formImage"
                                accept=".jpg, .png, .gif"
                                type="file"
                                name="image"
                            />
                            <FileButton>Выбрать</FileButton>
                        </File>
                        <FilePreview id="formPreview"></FilePreview>
                    </div>
                </FormItem>
                <FormItem>
                    <FormLabel>ФИО*</FormLabel>
                    <FormInput
                        name="name"
                        type="text"
                        placeholder="Введите ваши ФИО"
                    />
                </FormItem>
                <FormItem>
                    <FormLabel>E-mail*</FormLabel>
                    <FormInput
                        name="email"
                        type="text"
                        placeholder="Введите ваш e-mail"
                    />
                </FormItem>
                <FormItem>
                    <FormLabel>Телефон*</FormLabel>
                    <FormInput
                        name="Phone"
                        type="text"
                        placeholder="+7 917 999-99-99"
                    />
                </FormItem>
                <FormButton type="submit">Отправить</FormButton>
            </form>
        </ConstructorForm>
    )
}

export default Form
