import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "neRJon4mvg761ap1WNmssZ", // ID of a project you are using
      token:
        "xYsJ9TwS4mqAZd6zvHfkW11fhpmckEtmPNq2KbZ3sHpAgNyBNRg4g1L4Dv8xRfe4XBpwpcAlMbN9TQLLhA", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
