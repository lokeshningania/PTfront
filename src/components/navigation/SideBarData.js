import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    
    {
        title : 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title : 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title : 'Revenues',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            }

        ]

    },
    {
        title : 'Task books',
        path: '/reports',
        icon: <AiIcons.AiFillBook/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title : 'Report 1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title : 'Report 2',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            }

        ]

    },
    {
        title : 'Tags',
        path: '/reports',
        icon: <FaIcons.FaTags/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

    },

    {
        title : 'Daily',
        path: '/reports',
        icon: <FaIcons.FaCalendarDay/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

    },
    {
        title : 'Weekly',
        path: '/reports',
        icon: <FaIcons.FaCalendarWeek/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

    },

    {
        title : 'Journal',
        path: '/reports',
        icon: <FaIcons.FaJournalWhills/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

    }

]