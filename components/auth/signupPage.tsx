"use client";
import React from "react";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import Link from "next/link";

export default function SignupPage() {
  const loginInput = z.object({
    username: z.string().min(3, "Username must be at least 3 characters."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Password must at least contain one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  });

  const form = useForm<z.infer<typeof loginInput>>({
    resolver: zodResolver(loginInput),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginInput>) {
    // Do something with the form values.
    console.log(data);
  }

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-2 border-gray-500/20 rounded-xl px-16 py-12 w-105"
        >
          <FieldSet>
            <FieldLegend className="text-center font-bold text-xl!">
              Create an account
            </FieldLegend>
            <FieldDescription className="text-center">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-semibold">
                Log in
              </Link>
            </FieldDescription>
            <FieldGroup>
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invald={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              ></Controller>

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                    />

                     {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              ></Controller>

              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Confirm Password
                    </FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      id={field.name}
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                    />
                     {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              ></Controller>

              <Field orientation="horizontal">
                <Button type="submit" className="w-full  py-2 rounded-md ">
                  Sign Up
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}
