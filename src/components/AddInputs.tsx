import { useRef } from "react"
import { toast } from 'react-toastify';

export const AddInputs = ({ listFields, setListFields }: any) => {
    const InputRef: any = useRef()

    const handelAdd = () => {
        if (InputRef.current['name_field'].value == "") return toast("نام فیلد اجباریست", { type: "error" })
        if (InputRef.current['title_field'].value == "") return toast("عنوان فیلد اجباریست", { type: "error" })
        let data = [...listFields];
        data.push({
            'name': InputRef.current['name_field'].value,
            'title': InputRef.current['title_field'].value,
            'type': InputRef.current['type_field'].value,
            'status': InputRef.current['status_field'].value,
            'description': InputRef.current['description'].value,
        })
        setListFields(data)
    }

    return (
        <form ref={InputRef} className="w-full flex flex-col mt-[50px]">
            <span className="text-gray-500 ">افزودن فیلد (در پایان برروی افزودن فیلد کلیک نمایید )</span>
            <div className="w-full flex flex-col mt-2 p-4 bg-gray-100 rounded-md">
                <div className="w-full flex flex-col">
                    <span className=' text-gray-600 text-xs'>نام فیلد (انگلیسی)  <span className='text-red-500'>*</span></span>
                    <input name="name_field" type="text" className="mt-2 w-full h-[40px] px-2 focus:outline-none focus:border-[tomato] shadow rounded-md" />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className=' text-gray-600 text-xs'>عنوان نمایشی  <span className='text-red-500'>*</span></span>
                    <input name="title_field" type="text" className="mt-2 w-full h-[40px] px-2 focus:outline-none focus:border-[tomato] shadow rounded-md" />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-gray-600 text-xs">نوع فیلد</span>
                    <select name="type_field" className="mt-2 w-full h-[40px] bg-white px-2 focus:outline-none focus:border-[tomato] shadow rounded-md">
                        <option value={'text'}>رشته</option>
                        <option value={'number'}>عدد</option>
                        <option value={'text-box'}>توضیحات</option>
                        <option value={'date'}>تاریخ</option>
                        <option value={'select'}>انتخاب از لیست</option>
                        <option value={'radio'}>رادیویی</option>
                        <option value={'checkbox'}>چک باکس</option>
                    </select>
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-gray-600 text-xs">وضعیت فیلد</span>
                    <select name="status_field" className="mt-2 w-full h-[40px] bg-white px-2 focus:outline-none focus:border-[tomato] shadow rounded-md">
                        <option value={'required'}>اجباری</option>
                        <option value={'notrequired'}>اختیاری</option>
                    </select>
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-gray-600 text-xs">توضیحات فیلد</span>
                    <textarea name="description" className="mt-2 w-full h-[70px] p-2 focus:outline-none focus:border-[tomato] shadow rounded-md" />
                </div>
                <button onClick={handelAdd} type="button" className="w-[120px] h-[40px] rounded-md mt-5 bg-blue-300 text-white text-sm">افزودن فیلد</button>
            </div>
        </form>
    )
}