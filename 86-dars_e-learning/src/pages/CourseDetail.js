import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CourseState } from "./../pages/courseState";

const CourseDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  // useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url,
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);

  return (
    <>
      {course && (
        <Detail>
          <Header>
            <h1>{course.title}</h1>
            <img src={course.mainImg} alt="laptop" />
          </Header>
        </Detail>
      )}
    </>
  );
};

const Details = styled.div``;
const Header = styled.div``;

export default CourseDetail;
