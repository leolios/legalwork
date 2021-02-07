---
to: ./tsconfig.json
sh: npm install > init.log
---
{
  "compilerOptions": {
      "module": "commonjs",
      "target": "esnext",
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true,
      "noEmitHelpers": true,
      "noEmitOnError": true,
      "importHelpers": true,
      "strict": true,
      "baseUrl": ".",
      "skipLibCheck": true,
      "lib": [
          "es2015",
      ],
      "types": [
          "node"
      ],
      "paths": {
          "*": [
              "./node_modules/*"
          ],
          "~/*": [
              "*"
          ]
      }
  },
  "include": [
      "*.ts",
  ],
  "exclude": [
      "node_modules",
  ]
}