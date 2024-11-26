import * as icons from 'react-bootstrap-icons';

export const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[iconName];

  if (!BootstrapIcon) {
    throw new Error(`O ícone "${iconName}" não foi encontrado.`);
  }

  return <BootstrapIcon {...props} />;
};
