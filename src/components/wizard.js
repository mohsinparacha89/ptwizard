import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const Wizard = ({ children }) => {
  const steps = React.Children.toArray(children);

  return (
    <div></div>
  );

};

export const Step = ({ children }) => children;

function Template({ currentPath, steps }) {
  const currentIndex = steps.findIndex(step => step.props.path === currentPath);
  const prevStep = currentIndex > 0 && steps[currentIndex - 1].props;
  const nextStep = currentIndex < steps.length - 1 && steps[currentIndex + 1].props;

  console.log(currentIndex);
  console.log(prevStep);
  console.log(nextStep);

}