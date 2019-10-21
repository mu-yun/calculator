pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('install') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        sh 'npm i'
      }
    }
    stage('build') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        sh 'ng build --prod'
      }
    }
    stage('deploy') {
      agent {
        node {
          label 'master'
        }

      }
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