import * as React from "react";

interface EmailTemplateProps {
  name: string;
  subject: string;
  message: string;
  contactNumber: string;
  emailAddress: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  subject,
  message,
  contactNumber,
  emailAddress,
}) => (
  <div>
    <h1>New enquiry!</h1>
    <div>Received from: {name}</div>
    <div>Subject: {subject}</div>
    <div>Message: {message}</div>
    <div>Contact number: {contactNumber}</div>
    <div>Reply to email address: {emailAddress}</div>
    <div>DO NOT REPLY TO THIS EMAIL! Use customer details above</div>
    Love from beeskneesband.co.uk
  </div>
);
