"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
import Dashboard from "./Dashboard/page";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    try {
      const myCourses = await userClient.findMyCourses();
      setCourses(myCourses);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  return <Dashboard  />;
}
