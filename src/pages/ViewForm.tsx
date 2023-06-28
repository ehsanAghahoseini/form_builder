import { useEffect, useRef, useState } from "react"
import { AddInputs, ListInputs } from "../components"
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

export const ViewForm = () => {
    const params = useParams();
    const [detailData, setDetailData] = useState<any>(null)

    useEffect(() => {
        if (localStorage.getItem('list') && params?.id) {
            let list = JSON.parse(String(localStorage.getItem('list')))
            for (let i of list) {
                if (i.id == params.id) {
                    setDetailData(i)
                }
            }
        }
    }, [params?.id])


    return (
        <form className="w-full flex flex-col p-3 pt-5">

            <div className="w-full flex items-center justify-center my-2 mb-6">
                {detailData?.title}
            </div>

            {detailData?.fields.map((item: any, index: number) =>

                <div className="w-full flex flex-col">

                    {['text', 'number', 'date'].indexOf(item?.type) != -1 &&
                        <div className="w-full flex flex-col mt-6">
                            <span className="text-gray-500 text-sm ">
                                {item?.title}
                                {item?.status == 'required' && <span className='text-red-500'>*</span>}
                                {item?.description != '' && <span className='text-gray-500 mr-3'>({item?.description})</span>}
                            </span>
                            <input name={item?.name} type={item.type} className="mt-2 w-full h-[40px] px-2 focus:outline-none focus:border-[tomato] border border-gray-500 rounded-md" required={item?.status == 'required' ? true : false} />
                        </div>
                    }

                    {item?.type == 'select' &&
                        <div className="w-full flex flex-col mt-6">
                            <span className="text-gray-500 text-sm ">
                                {item?.title}
                                {item?.status == 'required' && <span className='text-red-500'>*</span>}
                                {item?.description != '' && <span className='text-gray-500 mr-3'>({item?.description})</span>}
                            </span>
                            <select name={item?.name} className="mt-2 bg-white w-full h-[40px] px-2 focus:outline-none focus:border-[tomato] border border-gray-500 rounded-md" required={item?.status == 'required' ? true : false}>
                                <option>انتخاب اول</option>
                                <option>انتخاب دوم</option>
                            </select>
                        </div>
                    }

                    {item?.type == 'checkbox' &&
                        <div className="w-full flex flex-col mt-6">
                            <span className="text-gray-500 text-sm ">
                                {item?.title}
                                {item?.status == 'required' && <span className='text-red-500'>*</span>}
                                {item?.description != '' && <span className='text-gray-500 mr-3'>({item?.description})</span>}
                            </span>
                            <div className="mt-2 bg-white w-full h-[40px] px-2 flex items-center justify-around ">
                                <label className="cursor-pointer mt-2">
                                    <input className="ml-2" type="checkbox" />
                                    <span>گزینه اول</span>
                                </label>
                                <label className="cursor-pointer mt-2">
                                    <input className="ml-2" type="checkbox" />
                                    <span>گزینه دوم</span>
                                </label>
                            </div>
                        </div>
                    }

                    {item?.type == 'radio' &&
                        <div className="w-full flex flex-col mt-6">
                            <span className="text-gray-500 text-sm ">
                                {item?.title}
                                {item?.status == 'required' && <span className='text-red-500'>*</span>}
                                {item?.description != '' && <span className='text-gray-500 mr-3'>({item?.description})</span>}
                            </span>
                            <div className="mt-2 bg-white w-full h-[40px] px-2 flex items-center justify-around ">
                                <label className="cursor-pointer mt-2">
                                    <input  name={item?.name} className="ml-2" type="radio" />
                                    <span>گزینه اول</span>
                                </label>
                                <label className="cursor-pointer mt-2">
                                    <input  name={item?.name} className="ml-2" type="radio" />
                                    <span>گزینه دوم</span>
                                </label>
                            </div>
                        </div>
                    }

                    {item?.type == 'text-box' &&
                        <div className="w-full flex flex-col mt-6">
                            <span className="text-gray-500 text-sm ">
                                {item?.title}
                                {item?.status == 'required' && <span className='text-red-500'>*</span>}
                                {item?.description != '' && <span className='text-gray-500 mr-3'>({item?.description})</span>}
                            </span>
                            <textarea name={item?.name}  className="mt-2 w-full min-h-[70px] p-2 focus:outline-none focus:border-[tomato] border border-gray-500 rounded-md" required={item?.status == 'required' ? true : false} />
                        </div>
                    }

                </div>
            )}


            <button className="w-full h-[40px] my-10 rounded-md bg-[#f6893c] text-white">ثبت</button>

        </form>
    )
}