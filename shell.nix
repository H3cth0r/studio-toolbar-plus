{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "bun-node-shell";

  buildInputs = [
    pkgs.nodejs_24
    pkgs.bun
  ];

  shellHook = ''
    echo "Node version: $(node -v)"
    echo "Bun version: $(bun --version)"
  '';
}
