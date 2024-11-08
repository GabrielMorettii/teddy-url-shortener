import { LoginController } from "@/presentation/controllers";
import { type Controller } from "@/presentation/protocols";
import { makeLoginValidation } from "../validation";
import { makeAuthenticateUser } from "../usecases";

export const makeLoginController = (): Controller => {
  const controller = new LoginController(
    makeLoginValidation(),
    makeAuthenticateUser(),
  );

  return controller;
};
