import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSvgEdit, CSvgHeye, CSvgTrash } from '../components'

export const ListForm = () => {
    const [list, setList] = useState<any>([])

    useEffect(() => {
        if (localStorage.getItem('list')) {
            setList(JSON.parse(String(localStorage.getItem('list'))))
        }
    }, [])

    return (
        <div className="w-full flex flex-col p-3">

            <div className="w-full flex items-center">
                <Link to='/add'>
                    <button className="w-[120px] h-[40px] bg-[#f6893c] text-white rounded-md my-4">ایجاد فرم</button>
                </Link>
            </div>

            <div className="w-full h-[45px] py-[4px] flex items-center rounded-md border border-[#f6893c]">
                <div className="w-full h-full border-l border-[#f6893c] flex items-center justify-center text-[#f6893c] text-sm">نام فرم</div>
                <div className="w-full h-full border-l border-[#f6893c] flex items-center justify-center text-[#f6893c] text-sm">نمایش</div>
                <div className="w-full h-full border-l border-[#f6893c] flex items-center justify-center text-[#f6893c] text-sm">جدید</div>
                <div className="w-full h-full border-l border-[#f6893c] flex items-center justify-center text-[#f6893c] text-sm">ویرایش</div>
                <div className="w-full h-full  border-[#f6893c] flex items-center justify-center text-[#f6893c] text-sm">حذف</div>
            </div>

            {list.length == 0 &&
                <div className='w-full h-[200px] flex flex-col items-center justify-center text-gray-500'>
                    <span>هنوز فرمی ثبت نکرده اید</span>
                    <span className='mt-3'>با استفاده از دکمه ایجاد فرم یک فرم جدید بسازید</span>
                </div>
            }

            {list.length > 0 && list.map((item: any, index: number) =>
                <div key={index} className="w-full min-h-[55px] py-[5px] flex items-center bg-[#f9f9f9] shadow rounded-md mt-3 sm:text-sm text-xs">
                    <div className="w-full  flex flex-col items-center justify-center text-center border-l  px-1 text-blue-500 cursor-pointer">
                        <Link to={`/view/${item.id}`}>
                            <span>{item.title}</span>
                        </Link>
                    </div>
                    <div className="w-full  flex flex-col items-center justify-center text-center border-l border-gray-400 px-1">
                        <Link to={`/view/${item.id}`}>
                            <CSvgHeye className='w-[20px] cursor-pointer' />
                        </Link>
                    </div>
                    <div className="w-full  flex flex-col items-center justify-center text-center border-l border-gray-400 px-1">
                        {item.is_new ?
                            <span className='flex w-[20px] cursor-pointer h-[20px] items-center justify-center rounded-full border border-gray-950'>+</span>
                            :
                            <span>دسترسی ندارید</span>
                        }
                    </div>
                    <div className="w-full  flex flex-col items-center justify-center text-center border-l border-gray-400 px-1">
                        {item.is_edit ?
                            <CSvgEdit className='w-[20px] cursor-pointer' />
                            :
                            <span>دسترسی ندارید</span>
                        }
                    </div>
                    <div className="w-full  flex flex-col items-center justify-center text-center  border-gray-400 px-1">
                        {item.is_delete ?
                            <CSvgTrash className='w-[20px] cursor-pointer' />
                            :
                            <span>دسترسی ندارید</span>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}