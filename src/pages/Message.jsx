import React, { useContext , useEffect } from 'react'
import NoteContext from '../Context/NoteContext'
const Messages = () => {
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle('Messages Here!!')
  },[])
  
  return (
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laborum velit praesentium ratione et, voluptatum ad sit ipsum porro consectetur vero pariatur neque qui accusamus a? Reprehenderit aspernatur ea at?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere distinctio quisquam maxime nulla quidem eveniet incidunt ducimus. Earum a quo non dolores, beatae temporibus eos, quibusdam, saepe dolor cupiditate eaque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nihil nulla harum expedita doloribus excepturi rerum ipsa accusantium iusto eligendi qui magni animi veritatis odio earum unde! Tempore, alias vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore consequuntur tempora incidunt non. Fugiat, dignissimos a porro, eos earum sint consequatur, praesentium odit accusantium nobis sapiente magni dolorum eveniet?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga vitae labore a, aspernatur sint nemo voluptatum dolore aliquid nisi eum atque aliquam vel unde quasi exercitationem consectetur minus laboriosam harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum, minus tempora assumenda temporibus quo obcaecati nesciunt vitae explicabo enim laborum sunt quod nulla magnam ex vero ducimus libero et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo deleniti provident assumenda veniam magnam consequatur, sed nam cumque quasi voluptates reprehenderit est mollitia neque modi ex odio maxime molestiae.
        </p>
    </div>
  )
}

export default Messages