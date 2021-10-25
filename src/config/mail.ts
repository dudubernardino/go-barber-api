import { MailConfigProps } from "@config/protocols/configProtocols";

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'eduardo@rocketseat.com.br',
      name: 'Eduardo da Rocketseat',
    },
  },
} as MailConfigProps;
