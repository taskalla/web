import React from "react";
import { Button, Input } from "theme-ui";
import FormTemplate from "../templates/form";

import { Flag } from "react-feather";

function SignUp() {
  return (
    <FormTemplate onSubmit={(e) => e.preventDefault()}>
      <div className="formHeader">
        <Flag />
        <h3>Sign up</h3>
      </div>
      <Input placeholder="Email" name="email" autoFocus />
      <Input placeholder="Email" name="email" autoFocus />
      <Input placeholder="Email" name="email" autoFocus />
      <Input placeholder="Email" name="email" autoFocus />
      <Button type="submit">Next</Button>
    </FormTemplate>
  );
}

export default SignUp;
