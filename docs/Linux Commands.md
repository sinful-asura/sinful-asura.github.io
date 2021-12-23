# Linux commands

## Set firefox as default for links (itinerary & kio-client opening links problem on Arch)
> xdg-settings set default-url-scheme-handler http firefox.desktop

## Symlink XAMPP's php to system php
> sudo ln -s /opt/lampp/bin/php /usr/bin/php

## Setup SSH
> Make .ssh folder in Home directory(~), generate keys and *config* file which has the following layout:
```
Host *
    HostKeyAlgorithms +ssh-rsa
    PubkeyAcceptedKeyTypes +ssh-rsa

Host LOCATION_ONE_SYMLINK
    HostName LOCATION_ONE_FULL_LINK
    IdentityFile ~/.ssh/id_key_for_location_one

Host LOCATION_TWO_SYMLINK
    HostName LOCATION_TWO_FULL_LINK
    IdentityFile ~/.ssh/id_key_for_location_two

```

