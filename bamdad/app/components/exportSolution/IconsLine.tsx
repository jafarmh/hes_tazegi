'use client';

import React, { useEffect, useState } from 'react'

import { AddNewLike } from '@/app/redux/ApiCall/ExportSolution';
import CommentDrawer from '../elements/drawer/common/CommentDrawer';
import Dislike from '../../../asset/img/dislike.svg'
import Like from '../../../asset/img/like.svg';
import Message from '../../../asset/img/message-text.svg';
import Redo from '../../../asset/img/redo.svg';
import { toast } from 'react-toastify';
import useCheckLogin from '@/app/hooks/CheckLogin';
import { useTranslation } from 'react-i18next';

export default function IconsLine({ data }: { data?: any }) {
  const [openComment, setOpenComment] = useState(false);
  const [numberComment, setNumberComment] = useState(data.comment_count ?? 0)
  const [numberLike, setNumberLike] = useState(data.like_count ?? 0)
  const [numberDisLike, setNumberDisLike] = useState(data.dis_like_count ?? 0)
  const [changeLike, setChangeLike] = useState(false);
  const [changeDisLike, setChangeDisLike] = useState(false);
  const isLogin = useCheckLogin();
  const { t } = useTranslation();


  useEffect(() => {
    if (data !== undefined && data !== null) {
      setNumberComment(data.comment_count)
      setNumberLike(data.like_count)
      setNumberDisLike(data.dis_like_count)
    }
  }, [data])

  const Likes = () => {
    if (!isLogin) {
      toast.error(t("loginReq"));
      return;
    }
    AddNewLike({ exp_id: data.id, type: 'like' }, (res: any) => {
      if (res) {
        if (res.type !== undefined) {
          if (res.type === 'like') {
            setChangeLike(true);
            return;

          }

          if (res.type === 'dislike') {
            if (numberDisLike > 0)
              setNumberDisLike((+ numberDisLike) - 1);
            setChangeDisLike(false);
            setNumberLike((+ numberLike) + 1);
            setChangeLike(true);
            return;

          }
        }


      }
      if (res === null) {
        setNumberLike((+ numberLike) + 1);
        setChangeLike(true);
        if (changeDisLike) {
          if (numberDisLike > 0)
            setNumberDisLike((+ numberDisLike) - 1);
          setChangeDisLike(false);
        }
      }
    })
  }

  const DisLikes = () => {
    if (!isLogin) {
      toast.error(t("loginReq"));
      return;
    }
    AddNewLike({ exp_id: data.id, type: 'dislike' }, (res: any) => {

      if (res) {
        if (res.type !== undefined) {
          if (res.type === 'like') {
            if (changeLike) {
              if (numberLike > 0)
                setNumberLike((+ numberLike) - 1);
              setChangeLike(false);
              setNumberDisLike((+ numberDisLike) + 1)
              setChangeDisLike(true);
              return

            }
          }

          if (res.type === 'dislike') {
            setChangeDisLike(true);
            return;


          }
        }

      }
      if (res == null) { }
      setNumberDisLike((+ numberDisLike) + 1)
      setChangeDisLike(true);
      if (changeLike) {
        if (numberLike > 0)
          setNumberLike((+ numberLike) - 1);
        setChangeLike(false);
      }
    })
  }

  return (
    <>
      <div className='flex-none flex flex-row gap-x-4 text-sm px-5'>
        {/* <div className="flex flex-row gap-x-2">
        <div><span className='text-[var(--gray)]'>123</span></div>
        <div><img src={Redo.src} /></div>
      </div> */}
        <div className="flex flex-row gap-x-2">
          <div><span className='text-[var(--gray)]'>{numberComment}</span></div>
          <div className='cursor-pointer	' onClick={() => {
            if (!isLogin) {
              toast.error(t("loginReq"));
              return;
            }
            setOpenComment(true)
          }}><img src={Message.src} /></div>

        </div>
        <div onClick={() => DisLikes()} className="flex flex-row gap-x-2 cursor-pointer">
          <div><span className='text-[var(--gray)]'>{numberDisLike}</span></div>
          <div><img src={Dislike.src} /></div>
        </div>
        <div onClick={() => Likes()} className="flex flex-row gap-x-2 cursor-pointer">
          <div><span className='text-[var(--gray)]'>{numberLike}</span></div>
          <div><img src={Like.src} /></div>
        </div>
      </div>

      {openComment && <CommentDrawer exp_id={data.id} changeComment={() => { setNumberComment((+ numberComment) + 1) }} changeOpen={(value: boolean) => setOpenComment(value)} isOpen={openComment} />}

    </>
  )
}
