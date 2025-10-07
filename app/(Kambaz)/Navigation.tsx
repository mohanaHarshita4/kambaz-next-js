"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaFlask } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <ListGroup
      className="rounded-0 position-fixed top-0 bottom-0 bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      {/* Logo */}
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/neu.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Account") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Account"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Account") ? "text-danger" : "text-white"
          }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${isActive("/Account") ? "text-danger" : "text-white"}`}
          />
          Account
        </Link>
      </ListGroupItem>

      {/* Dashboard */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Dashboard") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Dashboard") ? "text-danger" : "text-white"
          }`}
        >
          <AiOutlineDashboard
            className={`fs-1 ${isActive("/Dashboard") ? "text-danger" : "text-white"}`}
          />
          Dashboard
        </Link>
      </ListGroupItem>

      {/* Calendar */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Calendar") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Calendar"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Calendar") ? "text-danger" : "text-white"
          }`}
        >
          <IoCalendarOutline
            className={`fs-1 ${isActive("/Calendar") ? "text-danger" : "text-white"}`}
          />
          Calendar
        </Link>
      </ListGroupItem>

      {/* Inbox */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Inbox") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Inbox"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Inbox") ? "text-danger" : "text-white"
          }`}
        >
          <FaInbox
            className={`fs-1 ${isActive("/Inbox") ? "text-danger" : "text-white"}`}
          />
          Inbox
        </Link>
      </ListGroupItem>

      {/* Courses */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Courses") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Courses/6789/Home"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Courses") ? "text-danger" : "text-white"
          }`}
        >
          <LiaBookSolid
            className={`fs-1 ${isActive("/Courses") ? "text-danger" : "text-white"}`}
          />
          Courses
        </Link>
      </ListGroupItem>

      {/* Labs */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Labs") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Labs"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Labs") ? "text-danger" : "text-white"
          }`}
        >
          <FaFlask
            className={`fs-1 ${isActive("/Labs") ? "text-danger" : "text-white"}`}
          />
          Labs
        </Link>
      </ListGroupItem>

      {/* Settings */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Settings") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Settings"
          className={`d-flex flex-column align-items-center text-decoration-none ${
            isActive("/Settings") ? "text-danger" : "text-white"
          }`}
        >
          <LiaCogSolid
            className={`fs-1 ${isActive("/Settings") ? "text-danger" : "text-white"}`}
          />
          Settings
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
