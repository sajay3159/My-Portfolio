import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Home from '@/components/portfolio/Home';
import About from '@/components/portfolio/About';
import Services from '@/components/portfolio/Services';
import MyWork from '@/components/portfolio/MyWork';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

// Payload CMS
import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { Services_Data as mockServices, mywork_data as mockWork } from '@/components/portfolio/data';

export default async function Page() {
    const payload = await getPayload({ config: configPromise });
    
    // Fetch data from Payload CMS collections
    const { docs: servicesDocs } = await payload.find({
        collection: 'services',
        sort: 'number'
    });
    
    const { docs: projectsDocs } = await payload.find({
        collection: 'projects',
        sort: 'order'
    });

    // Fallback to mock data if CMS is empty
    const services = servicesDocs.length > 0 ? servicesDocs.map(doc => ({
        s_no: doc.number,
        s_name: doc.name,
        s_desc: doc.description
    })) : mockServices;

    const myWork = projectsDocs.length > 0 ? projectsDocs.map((doc: any) => ({
        link: doc.link,
        w_name: doc.title,
        w_img: doc.image?.url || '/assets/project_0_employee_attendance.png'
    })) : mockWork;

    return (
        <main className="bg-[#0f0f13] min-h-screen text-white overflow-x-hidden selection:bg-[#b415ff] selection:text-white font-sans">
            <Navbar />
            <Home />
            <About />
            <Services servicesData={services} />
            <MyWork workData={myWork} />
            <Contact />
            <Footer />
        </main>
    );
}

export const generateMetadata = () => {
    return {
        title: 'Ajay Sahani | Software Developer Portfolio',
        description: 'Portfolio of Ajay Sahani, a Software Developer from Vadodara, Gujarat.'
    }
}
