import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
    test('renders login form and handles login button click', () => {
        // ... existing test code
    });

    test('displays error message when email is empty', () => {
        // Render the component
        const { getByText, getByPlaceholderText } = render(<LoginContainer />);

        // Find input elements and enter values
        const emailInput = getByPlaceholderText('Username');
        fireEvent.change(emailInput, { target: { value: '' } });

        const passwordInput = getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Find and click the login button
        const loginButton = getByText('Login Werknemer');
        fireEvent.click(loginButton);

        // Assert that the error message is displayed
        const errorMessage = getByText('Please enter your email');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveStyle('color: red');
    });

    test('displays error message when password is empty', () => {
        // Render the component
        const { getByText, getByPlaceholderText } = render(<LoginContainer />);

        // Find input elements and enter values
        const emailInput = getByPlaceholderText('Username');
        fireEvent.change(emailInput, { target: { value: 'example@example.com' } });

        const passwordInput = getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: '' } });

        // Find and click the login button
        const loginButton = getByText('Login Werknemer');
        fireEvent.click(loginButton);

        // Assert that the error message is displayed
        const errorMessage = getByText('Please enter your password');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveStyle('color: red');
    });

    test('calls handleLogins function on pressing Enter key', () => {
        // Mock the handleLogins function
        const handleLoginsMock = jest.fn();

        // Render the component
        const { getByPlaceholderText } = render(
            <LoginContainer handleLogins={handleLoginsMock} />
        );

        // Find input elements and enter values
        const emailInput = getByPlaceholderText('Username');
        fireEvent.change(emailInput, { target: { value: 'example@example.com' } });

        const passwordInput = getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Simulate pressing Enter key on the password input
        fireEvent.keyDown(passwordInput, { key: 'Enter' });

        // Assert that the handleLogins function was called
        expect(handleLoginsMock).toHaveBeenCalled();
    });
});