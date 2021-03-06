<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/protobuf/descriptor.proto

namespace Google\Protobuf\Internal\FieldOptions;

/**
 * Protobuf type <code>google.protobuf.FieldOptions.JSType</code>
 */
class JSType
{
    /**
     * Use the default type.
     *
     * Generated from protobuf enum <code>JS_NORMAL = 0;</code>
     */
    const JS_NORMAL = 0;
    /**
     * Use JavaScript strings.
     *
     * Generated from protobuf enum <code>JS_STRING = 1;</code>
     */
    const JS_STRING = 1;
    /**
     * Use JavaScript numbers.
     *
     * Generated from protobuf enum <code>JS_NUMBER = 2;</code>
     */
    const JS_NUMBER = 2;
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(JSType::class, \Google\Protobuf\Internal\FieldOptions_JSType::class);

