import React from "react";
import {motion} from 'framer-motion' ;


function Item1(){

    const listData = [
        {
          title: 'About UIT',
          items: ['Vision/Mission', 'History', 'FAQS']
        },
        {
          title: 'Our Facilities',
          items: ['Library', 'LMS', 'Email Service']
        },
        {
          title: 'Our Locations',
          items: ['Contacts', 'Maps', 'Campus']
        }
      ];
    return (
        <motion.div class="item1"
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

export default Item1;