{
  description = "Sunartha";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/master";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShell = pkgs.mkShell {
        nativeBuildInputs = [ pkgs.bashInteractive ];
        buildInputs = with pkgs; [
          nodejs-18_x
          nodePackages.yarn
          nodePackages.prettier
          nodePackages.typescript
        ];
        shellHook = with pkgs; ''
          export PATH=~/.npm-packages/bin:$PATH
          export NODE_PATH=~/.npm-packages/lib/node_modules
        '';
      };
    });
}
