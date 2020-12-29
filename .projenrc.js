const { AwsCdkTypeScriptApp } = require('projen');

const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.78.0',
  authorName: 'Roman Naumenko',
  repository: 'https://github.com/OperationalFallacy/max-lambda-out',
  name: 'max-lambda-out',
  dependabot: false,
  buildWorkflow: false,
  rebuildBot: false,
  mergify: false,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/pipelines',
    '@aws-cdk/aws-codepipeline',
    '@aws-cdk/aws-codepipeline-actions',
    '@aws-cdk/aws-apigatewayv2-integrations',
  ],
  context: {
    '@aws-cdk/core:enableStackNameDuplicates': 'true',
    'aws-cdk:enableDiffNoFail': 'true',
    '@aws-cdk/core:stackRelativeExports': 'true',
    '@aws-cdk/core:newStyleStackSynthesis': 'true',
  },
  appEntrypoint: 'index.ts',
});

project.synth();
