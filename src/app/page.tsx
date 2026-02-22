import type { Metadata } from "next";

import Hero from "@/pc/home/hero";
import SelectedProjects from "@/pc/home/selected-projects";
import AboutMe from "@/pc/home/about-me";
import GetInTouchWithForm from "@/pc/home/get-in-touch";

import { getSelectedProjects } from "@/constants/projects";
import { createMetadata } from "@/lib/metadata";
import { MY_NAME } from "@/lib/constants";

// Static page metadata
export const metadata: Metadata = createMetadata({
  root: true,
  title: MY_NAME,
  description: "Welcome to my portfolio",
  locale: "en"
});

export default function Page() {
  // Load selected projects from constants
  const projects = getSelectedProjects();

  return (
    <>
      <Hero />
      <SelectedProjects projects={projects} />
      <AboutMe />
      <GetInTouchWithForm />
      
    </>
  );
}
