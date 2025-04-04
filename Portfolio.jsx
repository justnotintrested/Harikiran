import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-lavender-100 to-teal-100 text-gray-800 px-6 py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Hari Kiran K</h1>
        <p className="text-xl mb-4">Aspiring ML & Big Data Engineer</p>
        <Button className="mr-2">View Projects</Button>
        <Button variant="outline">Download Resume</Button>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto mb-4">
          B.Tech CSE student at PES University (CGPA 8.12). Awarded Distinction 4 times.
          Skilled in Python, MERN stack, and Big Data technologies.
        </p>
        <p className="text-sm text-gray-600">Certified in Problem Solving (Intermediate) – Python – HackerRank</p>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Distributed File Orchestration",
              desc: "Remote storage system using TCP for client-server interaction (Python)."
            },
            {
              title: "Job On Board",
              desc: "Student-recruiter platform using MERN & MySQL."
            },
            {
              title: "Guess The Word Game",
              desc: "Multiplayer TCP game with SSL using Python."
            },
            {
              title: "E-Commerce Site",
              desc: "Full-stack MERN website with cart, auth, order flow."
            }
          ].map((proj, i) => (
            <Card key={i} className="hover:shadow-lg">
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
                <p>{proj.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent>
            <h3 className="font-semibold">Swajyoth Technologies Pvt. Ltd. — Intern (Jun–Aug 2024)</h3>
            <p>Worked on a university DB platform. Designed prototype DB using MySQL as DB Designer.</p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">Email: <a href="mailto:hari080kiran@gmail.com" className="text-blue-600 underline">hari080kiran@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/hari-kiran-k-438052243" className="text-blue-600 underline" target="_blank">Profile</a></p>
      </section>
    </main>
  );
}
