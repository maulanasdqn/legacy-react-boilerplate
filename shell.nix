{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name="sunartha";
  buildInputs = [
    pkgs.nodejs-16_x
    pkgs.nodePackages.yarn
  ];
  shellHook = ''
   export PATH=~/.npm-packages/bin:$PATH
   export NODE_PATH=~/.npm-packages/lib/node_modules  
  '';
}