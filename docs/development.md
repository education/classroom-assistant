
# Set-Up for Development

Setting up your local environment:

```sh
git clone https://github.com/education/classroom-assistant
cd classroom-assistant
```
Install dependencies:

```
script/setup
```
Run the application:

```
script/run
```

## Build the application

You can build Classroom Assistant into executable:

```
script/package
```

Please follow `MacOS` specific instructions below:

### MacOS

Building for MacOS requires an [Apple Developer ID certificate](https://developer.apple.com/developer-id/).
Once obtained and installed on your machine, reference the identity as the
`CLASSROOM_ASSISTANT_OSX_DEVELOPER_ID` environment variable. This can be done by
adding the following line to your `.bashrc`:

```sh
export CLASSROOM_ASSISTANT_OSX_DEVELOPER_ID="<your developer identity>"
```

You can retrieve a list of developer identities available in your keychain by running:

```
security find-identity -p codesigning
```

Now, Good to Go.

