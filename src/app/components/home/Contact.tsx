import React from 'react';

import SectionTitle from '@/app/components/main/SectionTitle';
import {
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiStackoverflow,
} from 'react-icons/si';
import { BiSolidEnvelope } from 'react-icons/bi';

const contactOptions = [
  {
    icon: BiSolidEnvelope,
    label: 'E-Mail',
    href: 'mailto:of.kayalar0101@gmail.com',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    href: 'https://github.com/jaeger-dvlp',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/of-kayalar/',
  },
  {
    icon: SiMedium,
    label: 'Medium',
    href: 'https://medium.com/@of.kayalar0101',
  },
  {
    icon: SiStackoverflow,
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/14098917/kaya',
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="grid w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-5 p-3 pb-14"
      >
        <section className="flex flex-col items-start justify-center gap-2 text-start">
          <SectionTitle>Contact</SectionTitle>
          <p className="text-md text-zinc-500">
            {
              "Feel free to reach out via email or connect through the platforms below. I'm open to new opportunities, collaborations, or simply a professional conversation."
            }
          </p>
        </section>
        <section className="flex w-full items-start justify-start">
          <p className="sr-only">
            {contactOptions.map((option, key) => (
              <React.Fragment key={`sr-contact-${key}`}>
                <a target="_blank" href={option.href}>
                  {option.label} : {option.href}
                </a>
                <br />
              </React.Fragment>
            ))}
          </p>
          <ul className="flex w-full list-none flex-wrap items-start justify-start gap-3">
            {contactOptions.map((option, index) => (
              <li
                key={`contact-option-${index}`}
                className="m-0 flex items-center justify-center p-0"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={option.href}
                  className="m-0 flex cursor-pointer flex-row items-center justify-center gap-2 bg-zinc-800 px-4 py-2 text-sm font-light text-zinc-400 transition-all duration-200 hover:bg-zinc-700 hover:text-zinc-200"
                >
                  <option.icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}

export default Contact;
