import Image from "next/image";
import styles from "./page.module.css";
import { Htag, Rating, Tag } from "../components";
import { Button } from "../components";
import { P } from "../components";
import Counter from "./counter";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' className='dr' arrow='down'>
        Кнопка
      </Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size='s'>Маленький</P>
      <P size='m'>Cредний</P>
      <P size='l'>Большой</P>
      <Tag size='s'>ghost</Tag>
      <Tag size='m' color='red'>
        red
      </Tag>
      <Tag size='s' color='green'>
        green
      </Tag>
      <Tag size='s' color='green'>
        green
      </Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={4} isEditable />
    </>
  );
}
export default withLayout(Home);
