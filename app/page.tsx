import Image from "next/image";
import styles from "./page.module.css";
import { Htag } from "../components";
import React from "react";
import { Button } from "../components";
import { P } from "../components";
export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' className='dr' arrow='down'>
        Кнопка
      </Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size='s'>Маленький</P>
      <P size='m'>Cредний</P>
      <P size='l'>Большой</P>
    </>
  );
}
