import { section } from 'motion/react-client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
export const Grid = () => {
  return (
    <section id = "about">
        <BentoGrid>
            {[{ title: 'Title1', decription: 'Desc1', id: 1}].map
            ((item, i) => (
                <BentoGridItem 
                id = {item.id}
                key = {item.id}
                title = {item.title}
                description = {item.decription}
                />
            ))
            }
        </BentoGrid>
    </section>
  )
}
