'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib//data';
import { PiToolboxFill } from 'react-icons/pi';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-12">
      <h2 className="mb-10 flex items-center justify-center text-3xl font-bold">
        Experience
        <span className="pl-3">
          <PiToolboxFill size={30} color="#fbd38d" />
        </span>
      </h2>
      <VerticalTimeline lineColor="#ddd">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#1a2437',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
                zIndex: 1,
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item?.icon}
              iconStyle={{
                background: '#1a2437',
                fontSize: '2rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.company}</p>
              <ul className="mt-1 list-none font-normal text-gray-700 dark:text-white/75">
                {item.description &&
                  item.description.map((desc: string, i: number) => (
                    <li key={i} className="mb-2">
                      {desc}
                    </li>
                  ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
