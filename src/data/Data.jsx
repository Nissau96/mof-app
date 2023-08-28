// import { GrServices } from 'react-icons/gr';
import { MdFeaturedPlayList, MdGroups, MdSupportAgent } from 'react-icons/md';
import { LuWarehouse } from 'react-icons/lu';

//! Form Link Array
export const AutomatedForms = [
    {
        id: 1,
        child: (
            <>
                HelpDesk <MdSupportAgent size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/ibrahim-halidu-05997a213/',
        style: ' rounded-tr-md',
    },
    {
        id: 2,
        child: (
            <>
                Services <MdFeaturedPlayList size={30} />
            </>
        ),
        href: 'https://github.com/Nissau96',
    },
    {
        id: 3,
        child: (
            <>
                Stores <LuWarehouse size={30} />
            </>
        ),
        href: 'https://github.com/Nissau96',
    },
    {
        id: 4,
        child: (
            <>
                Meetings <MdGroups size={30} />
            </>
        ),
        href: 'mailto:ihalidu996@gmail.com',
        style: ' rounded-br-md',
    },
];