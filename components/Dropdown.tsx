"use client";
import {Menu, Transition} from '@headlessui/react';
import Image from "next/image";
import {Fragment} from 'react'

export type DropdownProps = {
  placeholder: string;
  items: {
    text: string;
  }[];
};

export default function Dropdown(props: DropdownProps) {
  return <Menu>
    <Menu.Button className={'dropdown'}>
      <span className={'text-slate-300 text-sm font-normal'}>{props.placeholder}</span>
      <Image src={'down-arrow.svg'} alt={'down'} width={16} height={16}/>
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className={'dropdown-items'}>
        {props.items.map((value, key) => {
          return (<Menu.Item key={key}>
            {({active}) => (
              <button
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                {value.text}
              </button>
            )}
          </Menu.Item>);
        })}

      </Menu.Items>
    </Transition>
  </Menu>;
}