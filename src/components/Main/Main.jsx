import React from "react";
import { Switch } from "react-router-dom";

import HomeView from "../../views/HomeView/HomeView";
import RegisterView from "../../views/RegisterView/RegisterView";
import LoginView from "../../views/LoginView/LoginView";
import ContactsView from "../../views/ContactsView/ContactsView";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import Loader from "../../common/Loader/Loader";

export default function Main() {
  return (
    <main>
      <Section>
        <Container>
          <Switch fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo="/contacts"
            >
              <RegisterView />
            </PublicRoute>

            <PrivateRoute exact path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Container>
      </Section>
    </main>
  );
}
