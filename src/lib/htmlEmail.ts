export function html({
  firstname,
  lastname,
  email,
  text,
}: {
  firstname: string;
  lastname: string;
  email: string;
  text: string;
}) {
  return ` 
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 700px;
            margin: auto;
            padding: 50px 20px;
            font-size: 110%;
        }

        .message {
            font-size: medium;
            margin-top: 20px;
            margin-bottom: 40px;
        }
    </style>
    <div class="container">
    <h2>New Message from ${firstname} ${lastname}</h2>
    <p class="message">
        Email: ${email}<br>
        Message: ${text}
    </p>
</div>`;
}
