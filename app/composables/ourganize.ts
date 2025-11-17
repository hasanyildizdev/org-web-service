
import type { OurganizeContactInterface } from '~/types/ourganize_types';
export function useOurganize(){
    const contactContent = ref<OurganizeContactInterface>({
        name: 'Ourganize',
        domain: 'ourganize.com',
        url: 'https://ourganize.com',
        phone: '+90 540 075 10 00',
        phone_: '+905400751000',
        email: 'info@ourganize.com',
        address: 'Antalya, Turkey',
        slogan: 'Hold the Helm',
        social_media_links: [
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/ourganize',
                icon: 'i-fa-brands:facebook-f'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/ourganize',
                icon: 'i-fa-brands:instagram'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/ourganize',
                icon: 'i-fa-brands:twitter'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/company/ourganize',
                icon: 'i-fa-brands:linkedin-in'
            }
        ]
    });
    return {
        contactContent
    }
}