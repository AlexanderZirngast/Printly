"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="border-2 border-gray-500/20 rounded-xl px-12 py-16 w-85 sm:w-105">
        <FieldSet>
          <FieldLegend className="font-bold  text-xl! text-center">
            Welcome Back
          </FieldLegend>
          <FieldDescription>
            Sign in to access your dashboard and settings
          </FieldDescription>
        </FieldSet>

        <FieldGroup className="mt-8">
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input></Input>
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input ></Input>
          </Field>

          <Field orientation="horizontal">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
