# OpenSCD API

This package defines a common set of APIs, types, and interfaces for use by [OpenSCD](https://openscd.org) distributions and plugins.  
It does **not** contain any business logic or implementation—only the shared contracts that enable interoperability between OpenSCD core, plugins, and distribution builders.

## Purpose

- **For Plugin Developers:**  
  Provides the types and event interfaces needed to build plugins that integrate seamlessly with OpenSCD core.  
  See [docs/plugin-api.md](https://github.com/OMICRONEnergyOSS/oscd-api/blob/main/docs/plugin-api.md) for a detailed description of the plugin API.

- **For Distribution Builders:**  
  Supplies the types and interfaces for the OpenSCD root element and other extension points.  
  _API documentation for the OpenSCD root element and constraints for `plugin.json` will be provided in future docs._

## Documentation

- Interface & Type documentation can be found [here](https://omicronenergyoss.github.io/oscd-api/)

- [Plugin API](https://github.com/OMICRONEnergyOSS/oscd-api/blob/main/docs/plugin-api.md):  
  Comprehensive guide for plugin authors, including property contracts, event types, and theming.

- _Additional documentation (e.g., for the OpenSCD root element and `plugin.json` constraints) will be added soon._

## License

[Apache-2.0](LICENSE)
