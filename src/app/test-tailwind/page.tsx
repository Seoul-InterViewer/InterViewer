import React from "react";

export default function TestTailwind() {
  return (
    <div className="p-8 bg-background">
      <h1 className="text-bold32 text-main mb-6">Tailwind Test Page</h1>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-sb18 mb-4">Color Tests</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-32 h-16 bg-main flex-center">main</div>
          <div className="w-32 h-16 bg-font text-background flex-center">font</div>
          <div className="w-32 h-16 bg-correct flex-center">correct</div>
          <div className="w-32 h-16 bg-incorrect text-background flex-center">incorrect</div>
          <div className="w-32 h-16 bg-correctBg flex-center">correctBg</div>
          <div className="w-32 h-16 bg-incorrectBg flex-center">incorrectBg</div>
          <div className="w-32 h-16 bg-tag flex-center">tag</div>
          <div className="w-32 h-16 bg-border flex-center">border</div>
          <div className="w-32 h-16 bg-subText text-background flex-center">subText</div>
          <div className="w-32 h-16 bg-fontGray text-background flex-center">fontGray</div>
        </div>
      </section>

      {/* Font Sizes */}
      <section className="mb-8">
        <h2 className="text-sb18 mb-4">Font Size & Weight Tests</h2>

        <h3 className="text-sb16 mb-2">Bold</h3>
        <p className="text-bold56 mb-2">Bold 56</p>
        <p className="text-bold48 mb-2">Bold 48</p>
        <p className="text-bold40 mb-2">Bold 40</p>
        <p className="text-bold38 mb-2">Bold 38</p>
        <p className="text-bold32 mb-2">Bold 32</p>
        <p className="text-bold18 mb-2">Bold 18</p>
        <p className="text-bold14 mb-2">Bold 14</p>

        <h3 className="text-sb16 mb-2 mt-4">Semibold</h3>
        <p className="text-sb28 mb-2">Semibold 28</p>
        <p className="text-sb24 mb-2">Semibold 24</p>
        <p className="text-sb20 mb-2">Semibold 20</p>
        <p className="text-sb18 mb-2">Semibold 18</p>
        <p className="text-sb16 mb-2">Semibold 16</p>
        <p className="text-sb14 mb-2">Semibold 14</p>
        <p className="text-sb12 mb-2">Semibold 12</p>

        <h3 className="text-sb16 mb-2 mt-4">Regular</h3>
        <p className="text-regular24 mb-2">Regular 24</p>
        <p className="text-regular18 mb-2">Regular 18</p>
        <p className="text-regular14 mb-2">Regular 14</p>

        <h3 className="text-sb16 mb-2 mt-4">Medium</h3>
        <p className="text-medium12 mb-2">Medium 12</p>
        <p className="text-medium10 mb-2">Medium 10</p>
        <p className="text-medium8 mb-2">Medium 8</p>
      </section>

      {/* Custom Utilities */}
      <section className="mb-8">
        <h2 className="text-sb18 mb-4">Utility Classes</h2>

        <div className="mb-4">
          <p className="mb-2">flex-center:</p>
          <div className="w-64 h-24 bg-tag flex-center">
            <span>Centered Content</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">hover-filter (hover over):</p>
          <div className="w-64 h-24 bg-main flex-center hover-filter">
            <span>Hover over me</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">absolute-center:</p>
          <div className="w-64 h-24 bg-tag relative">
            <div className="absolute-center bg-main px-2 py-1">
              <span>Centered Element</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">custom border (might conflict):</p>
          <div className="border w-64 h-24 flex-center">
            <span>Element with Border</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">Tailwind's built-in border:</p>
          <div className="border-2 border-main w-64 h-24 flex-center">
            <span>Element with Tailwind Border</span>
          </div>
        </div>
      </section>
    </div>
  );
}
