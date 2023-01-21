function(instance, properties, context) {
    instance.data.initialized ? instance.data.funcUpdate(instance, null, context, true) : context.reportDebugger('LOADERR is not initialized. LOAD Script Action will not run.')
}