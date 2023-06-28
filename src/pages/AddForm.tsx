import { useRef, useState } from "react"
import { AddInputs, ListInputs } from "../components"
import { toast } from 'react-toastify';
import {  useNavigate } from "react-router-dom";

export const AddForm = () => {
    const formRef:any = useRef()
    const navigate = useNavigate()
    const [listFields , setListFields]=useState<any>([])

    const handelSubmit=async(e:any)=>{
        e.preventDefault()
        if (listFields.length == 0) return toast("افزودن حداقل یک فیلد اجباریست", { type: "error" })
        let form_list:any = localStorage.getItem('list') ? JSON.parse(String(localStorage.getItem('list'))) : [] ;
        form_list.push({
            'id': Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
            'title':formRef.current['form_name'].value ,
            'fields':listFields ,
            'is_new':formRef.current['new'].checked ,
            'is_edit':formRef.current['edit'].checked ,
            'is_delete':formRef.current['delete'].checked ,
        })
        await localStorage.setItem('list' , JSON.stringify(form_list))
        navigate('/')
    }

    return (
        <form onSubmit={handelSubmit} ref={formRef} className="w-full flex flex-col p-3 pt-10">

            <div className="w-full flex flex-col">
                <span className="text-gray-500 ">نام فرم <span className='text-red-500'>*</span></span>
                <input name={'form_name'} type="text" className="mt-2 w-full h-[40px] px-2 focus:outline-none focus:border-[tomato] border border-gray-500 rounded-md" required />
            </div>

            <div className="w-full flex flex-col mt-7">
                <span className="text-gray-500 ">عملیات فرم</span>
                <div className="mt-2 w-full flex items-center justify-around">
                    <label className="cursor-pointer mt-2">
                        <input name="new" className="ml-2" type="checkbox" />
                        <span>جدید</span>
                    </label>
                    <label className="cursor-pointer mt-2">
                        <input name="edit" className="ml-2" type="checkbox" />
                        <span>ویرایش</span>
                    </label>
                    <label className="cursor-pointer mt-2">
                        <input name="delete" className="ml-2" type="checkbox" />
                        <span>حذف</span>
                    </label>
                </div>
            </div>

            <AddInputs listFields={listFields} setListFields={setListFields} />
            <ListInputs listFields={listFields} />

            <button className="w-full h-[40px] my-10 rounded-md bg-[#f6893c] text-white">افزودن فرم</button>

        </form>
    )
}