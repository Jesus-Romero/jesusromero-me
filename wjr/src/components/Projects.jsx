import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
    <section>
      <font className="section-title section-title-c">Projects</font>


      <div className="block">
        <div className="section-text">
          <div className="projects-title">
            <b className="section-title-c">pocketchef.me</b>
          </div>
          <div className="projects-title-tools">
            <font className="section-title-c projects-tools">React</font>
            <font className="section-title-c projects-tools">Python</font>
            <font className="section-title-c projects-tools">SQL</font>
            <font className="section-title-c projects-tools">Flask</font>
            <font className="section-title-c projects-tools">PostgreSQL</font>
            <font className="section-title-c projects-tools">JavaScript</font>
            <font className="section-title-c projects-tools">Git</font>
            <font className="section-title-c projects-tools">Docker</font>
          </div>
          <div className="projects-description">
           <font className="section-text-c">&emsp;&emsp;A full stack web application hosted on an AWS EC2 instance and deployed within a docker container.
           Presented visitors with restaurant information and recipe information fetched from pocketchef's Flask-Restless generated API with API requests.
           Front-End implemented the user interface with Reactstrap and supported pagination, filtering, and searching of the data.</font>
          </div>


          <div className="projects-title">
            <b className="section-title-c">Dex</b>
          </div>
          <div className="projects-title-tools">
            <font className="section-title-c projects-tools">Java</font>
            <font className="section-title-c projects-tools">SQLite</font>
            <font className="section-title-c projects-tools">Firebase</font>
            <font className="section-title-c projects-tools">XML</font>
          </div>
          <div className="projects-description">
           <font className="section-text-c">&emsp;&emsp;An Android application, emulating a Pokedex, which presents all Pokemon's information,
           fetched asynchronously from PokeAPI using threads and stored locally in a database. Users can filter the Pokemon database,
           login with validated credentials with the help of FirebaseAuth, and store custom teams in a Firebase Database instance and send those teams to other users.</font>
          </div>


          <div className="projects-title">
            <b className="section-title-c">Pintos</b>
          </div>
          <div className="projects-title-tools">
            <font className="section-title-c projects-tools">C</font>
            <font className="section-title-c projects-tools">Git</font>
          </div>
          <div className="projects-description">
           <font className="section-text-c">&emsp;&emsp;A "pint-sized" operating system built upon a basic instructional x86 operating system that supports priority scheduling,
           argument passing on the stack, system calls for user programs, virtual memory, and a multi-level indexed file system.</font>
          </div>


          <div className="projects-title">
            <b className="section-title-c">Compiler</b>
          </div>
          <div className="projects-title-tools">
            <font className="section-title-c projects-tools">C</font>
            <font className="section-title-c projects-tools">Yacc</font>
            <font className="section-title-c projects-tools">Lex</font>
          </div>
          <div className="projects-description">
           <font className="section-text-c">&emsp;&emsp;A compiler for the Pascal language that generates assembly code with the use of a lexical analyzer that converts
           characters into tokens, a parser that analyzes Pascal statements with the use of a defined grammar and actions, and a code generator.</font>
          </div>


        </div>
      </div>
    </section>
    );
  }
}

export default Projects;
