pipeline {
  agent none
  stages {
    stage('install') {
      steps {
        sh 'npm i'
      }
    }
    stage('build') {
      steps {
        sh 'ng build --prod'
      }
    }
    stage('deploy') {
      environment {
        PROJECT_HOME = '/opt/projects/calculator'
      }
      steps {
        sh '''rm -rf $PROJECT_HOME/*
mv dist/calculator/* $PROJECT_HOME'''
      }
    }
  }
}