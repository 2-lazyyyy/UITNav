import React from "react";
import {motion} from 'framer-motion' ;


function Item2(){

    const listData = [
        {
          title: 'Academic Programs',
          items: ['Degree', 'Diploma']
        },
        {
          title: 'Student Support Service',
          items: ['LMS', 'Student Registeration', 'Email Service', 'Library']
        },
        {
          title: 'Admission',
          items: ['Calendar', 'Academic Rules', 'Campus']
        }
      ];
    return (
        <motion.div class="item2"
        initial={{opacity:0, y:-10}}
        animate={{opacity: 1, y : 10}}
        transition={{ duration: 0.5}}
        >
            {listData.map((data, index) => (
                <div key={index} className="frame">
                    <ul>
                        <ListItem text={data.title} isTitle={true} />
                        {data.items.map((item, i) => (
                        <ListItem key={i} text={item} />
                        ))}
                    </ul>
                </div>
                ))}
        </motion.div>
    )
}

function ListItem({ text, isTitle = false }) {
    return isTitle ? <li className="title">{text}</li> : <li>{text}</li>;
}

export default Item2;