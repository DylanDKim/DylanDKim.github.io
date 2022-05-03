import React, { useState, useEffect } from "react";

export default function Grid() {
  return (
    <section className="grid md:grid-cols-3 gap-5 my-16 mx-auto">
      <a href="https://github.com/MKT-Servers" className=" projbox max-w-md">
        <div className="img-overlay betrothed">
          <h3 className="text-3xl font-bold proj-header ">Betrothed</h3>
          <p className="text-sm font-medium proj-descrip px-8">
            Lead user flows and built onboarding and main dashboard for Wedding
            planning app <br /> Roles: Software Engineer, UI Lead
          </p>
        </div>
        <img
          className="proj-img"
          src="https://images.unsplash.com/photo-1492176861288-6b481cfad893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </a>
      <a href="https://github.com/MKT-Servers" className=" projbox max-w-md">
        <div className="img-overlay loungeo">
          <h3 className="text-3xl font-bold proj-header">Loungeo</h3>
          <p className="text-sm font-medium proj-descrip px-8">
            Developed back end for ecommerce fashion website <br /> Roles: Back
            End Engineer
          </p>
        </div>
        <img
          className="proj-img"
          src="https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        />
      </a>
      <a href="https://github.com/MKT-Servers" className=" projbox max-w-md">
        <div className="img-overlay solil">
          <h3 className="text-3xl font-bold proj-header">Soliloquy</h3>
          <p className="text-sm font-medium proj-descrip  px-8">
            Built related articles carousel and stored user data in favorite
            outfits section
            <br /> Roles: Front-End Engineer
          </p>
        </div>
        <img
          className="proj-img"
          src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        />
      </a>
    </section>
  );
}
