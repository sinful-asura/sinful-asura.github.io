# SSH Config example for using multiple identity keys
```
Host *
    HostKeyAlgorithms +ssh-rsa
    PubkeyAcceptedKeyTypes +ssh-rsa

Host ssh.dev.azure.com
    HostName ssh.dev.azure.com
    IdentityFile ~/.ssh/azure

Host bitbucket.org
    HostName bitbucket.org
    IdentityFile ~/.ssh/bitbucket
```
