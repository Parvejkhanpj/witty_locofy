import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";

const HomeScreen = () => {
  return (
    <div className="relative bg-white w-full h-[766px] overflow-hidden text-left text-base text-gray-1700 font-roboto">
      <img
        className="absolute h-[1.83%] w-[1.17%] top-[0.65%] right-[98.42%] bottom-[97.52%] left-[0.42%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      />
      <Button
        className="absolute top-[150px] left-[11px]"
        sx={{ width: 226 }}
        variant="contained"
        color="primary"
      >
        Search...
      </Button>
      <div className="absolute top-[0px] left-[0px] w-[1200px] h-[766px]">
        <div className="absolute top-[66px] left-[0px] bg-gray-100 w-[250px] h-[700px]" />
        <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_2px_1px_-1px_rgba(0,_0,_0,_0.2),_0px_1px_1px_rgba(0,_0,_0,_0.14),_0px_1px_3px_rgba(0,_0,_0,_0.12)] w-[1263px] h-[64px] overflow-hidden flex flex-row items-center justify-start gap-[0px]">
          <div className="self-stretch hidden flex-row items-center justify-start gap-[0px]">
            <div className="bg-gray-1800 h-[48px] flex flex-col items-start justify-start">
              <div className="flex-1 relative bg-gray-1800 w-[24px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_12px)] w-[24px]" />
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start">
              <img
                className="relative w-[30px] h-[24px] shrink-0"
                alt=""
                src="../shape.svg"
              />
            </div>
          </div>
          <div className="bg-gray-1800 h-[48px] flex flex-col items-start justify-start">
            <div className="flex-1 relative bg-gray-1800 w-[24px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_12px)] w-[24px]" />
            </div>
          </div>
          <div className="self-stretch overflow-hidden hidden flex-row items-start justify-start gap-[0px]">
            <div className="self-stretch hidden flex-col items-center justify-center relative gap-[0px]">
              <button className="cursor-pointer [border:none] p-[9px_16px] bg-[transparent] flex flex-row box-border items-center justify-center gap-[6px] z-[0]">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../starfilled.svg"
                  />
                </div>
                <div className="relative text-base tracking-[0.4px] leading-[24px] uppercase font-medium font-roboto text-indigo-100 text-left inline-block">
                  Witty
                </div>
              </button>
              <div className="absolute m-[0_!important] w-[calc(100%_+_2px)] right-[-1px] bottom-[-1px] left-[-1px] border-t-[2px_solid_#1976d2] box-border h-[2px] shrink-0 z-[1]" />
            </div>
            <div className="self-stretch hidden flex-col items-center justify-center">
              <div className="flex flex-row p-[9px_16px] box-border items-center justify-center gap-[6px]">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
                <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block">
                  Tab
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="hidden flex-row p-[9px_16px] box-border items-center justify-center gap-[6px]">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
                <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block">
                  Tab
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-col items-center justify-center">
              <div className="flex flex-row p-[9px_16px] box-border items-center justify-center gap-[6px]">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
                <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block">
                  Tab
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="hidden flex-row p-[9px_16px] box-border items-center justify-center gap-[6px]">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
                <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block">
                  Tab
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-col items-center justify-center">
              <div className="flex flex-row p-[9px_16px] box-border items-center justify-center gap-[6px]">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
                <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block">
                  Tab
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-1800 h-[48px] flex flex-col items-start justify-start">
            <div className="flex-1 relative bg-gray-1800 w-[24px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_12px)] w-[24px]" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px]">
            <div className="hidden flex-col items-start justify-start">
              <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../starfilled6.svg"
                />
              </div>
            </div>
            <div className="bg-gray-1800 h-[16px] flex flex-col items-start justify-start">
              <div className="flex-1 relative bg-gray-1800 w-[8px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start">
              <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../starfilled6.svg"
                />
              </div>
            </div>
            <div className="bg-gray-1800 h-[16px] flex flex-col items-start justify-start">
              <div className="flex-1 relative bg-gray-1800 w-[8px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start">
              <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../starfilled6.svg"
                />
              </div>
            </div>
            <div className="bg-gray-1800 h-[16px] flex flex-col items-start justify-start">
              <div className="flex-1 relative bg-gray-1800 w-[8px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-[48px] hidden flex-row p-[12px] box-border items-center justify-start">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../starfilled6.svg"
                />
              </div>
            </div>
            <div className="bg-gray-1800 h-[16px] flex flex-col items-start justify-start">
              <div className="flex-1 relative bg-gray-1800 w-[8px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-[48px] hidden flex-row p-[12px] box-border items-center justify-start">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../starfilled6.svg"
                />
              </div>
            </div>
            <div className="bg-gray-1800 h-[16px] flex flex-col items-start justify-start">
              <div className="flex-1 relative bg-gray-1800 w-[8px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
              </div>
            </div>
            <div className="bg-gray-1800 overflow-hidden flex flex-col items-center justify-center relative gap-[0px]">
              <div className="rounded-[64px] bg-gray-300 w-[40px] h-[40px] shrink-0 overflow-hidden flex flex-col p-[8px] box-border items-center justify-center z-[0]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../personfilled.svg"
                  />
                </div>
              </div>
              <div className="absolute m-[0_!important] right-[-2px] bottom-[-2px] rounded-[64px] bg-white w-[12px] h-[12px] shrink-0 hidden z-[1]">
                <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.66%] left-[16.67%] rounded-[8px] bg-green-200 overflow-hidden" />
              </div>
            </div>
          </div>
          <div className="bg-gray-1800 h-[48px] flex flex-col items-start justify-start">
            <div className="flex-1 relative bg-gray-1800 w-[24px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_12px)] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[24px] left-[23px] w-[150px] h-[40px] overflow-hidden flex flex-col items-start justify-start">
        <img
          className="relative w-[120px] h-[24px] shrink-0"
          alt=""
          src="../shape1.svg"
        />
      </div>
      <div className="absolute top-[21px] left-[1024px] tracking-[0.4px] leading-[24px] uppercase font-medium text-black inline-block">
        Parvej khan
      </div>
      <div className="absolute top-[77px] left-[11px] w-[220px] flex flex-col items-start justify-start">
        <FormControl className="self-stretch" variant="filled">
          <InputLabel color="primary">Projects</InputLabel>
          <Select
            color="primary"
            defaultValue="Project Name"
            size="medium"
            label="Projects"
          />
          <FormHelperText />
        </FormControl>
      </div>
      <div className="absolute top-[163px] left-[12px] w-[222px] h-[262px] text-gray-1900">
        <div className="absolute top-[0px] left-[2px] w-[220px] h-[48px]">
          <div className="absolute top-[0px] left-[0px] w-[220px] h-[48px] flex flex-col items-start justify-start gap-[0px]">
            <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col items-start justify-start relative gap-[0px] text-xl">
              <div className="self-stretch overflow-hidden flex flex-row p-[8px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                <div className="flex flex-col items-start justify-start gap-[0px]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                  <div className="relative w-[56px] h-[0px] shrink-0" />
                </div>
                <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                  <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                    Modules
                  </div>
                  <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                    Secondary
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="rounded-[48px] hidden flex-row p-[4px] box-border items-center justify-start">
                    <img
                      className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                      alt=""
                      src="../expandlessfilled.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
            </div>
            <div className="self-stretch rounded-[4px] bg-gray-1600 overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
              <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                <div className="hidden flex-col items-start justify-start gap-[0px]">
                  <div className="hidden flex-row items-start justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                  <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                </div>
                <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                    Module name
                  </div>
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                    Secondary
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start">
                  <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
            </div>
            <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
              <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                <div className="hidden flex-col items-start justify-start gap-[0px]">
                  <div className="hidden flex-row items-start justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                  <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                </div>
                <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                    Module name
                  </div>
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                    Secondary
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start">
                  <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
            </div>
            <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
              <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                <div className="hidden flex-col items-start justify-start gap-[0px]">
                  <div className="hidden flex-row items-start justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                  <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                </div>
                <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                    Module name
                  </div>
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                    Secondary
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start">
                  <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
            </div>
            <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
              <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                <div className="hidden flex-col items-start justify-start gap-[0px]">
                  <div className="hidden flex-row items-start justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                  <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                </div>
                <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] hidden">
                    Module name
                  </div>
                  <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                    Secondary
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start">
                  <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                      alt=""
                      src="../starfilled6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
            </div>
          </div>
          <img
            className="absolute top-[12px] left-[168px] w-[24px] h-[27px] overflow-hidden"
            alt=""
            src="../addfilled.svg"
          />
        </div>
        <div className="absolute top-[53px] left-[0px] w-[222px] h-[209px]">
          <div className="absolute top-[0px] left-[1px] w-[220px] h-[48px]">
            <div className="absolute top-[0px] left-[0px] w-[220px] h-[48px] flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col items-start justify-start relative gap-[0px] text-xl">
                <div className="self-stretch overflow-hidden flex flex-row p-[8px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="flex flex-col items-start justify-start gap-[0px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                      Features
                    </div>
                    <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[48px] hidden flex-row p-[4px] box-border items-center justify-start">
                      <img
                        className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                        alt=""
                        src="../expandlessfilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] bg-gray-1600 overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] hidden">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
            </div>
            <img
              className="absolute top-[12px] left-[168px] w-[24px] h-[27px] overflow-hidden"
              alt=""
              src="../addfilled1.svg"
            />
          </div>
          <div className="absolute top-[60px] left-[2px] w-[220px] h-[48px]">
            <div className="absolute top-[0px] left-[0px] w-[220px] h-[48px] flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col items-start justify-start relative gap-[0px] text-xl">
                <div className="self-stretch overflow-hidden flex flex-row p-[8px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="flex flex-col items-start justify-start gap-[0px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                      Tasks
                    </div>
                    <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[48px] hidden flex-row p-[4px] box-border items-center justify-start">
                      <img
                        className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                        alt=""
                        src="../expandlessfilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] bg-gray-1600 overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] hidden">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
            </div>
            <img
              className="absolute top-[12px] left-[168px] w-[24px] h-[27px] overflow-hidden"
              alt=""
              src="../addfilled2.svg"
            />
          </div>
          <div className="absolute top-[161px] left-[0px] w-[220px] h-[48px]">
            <div className="absolute top-[0px] left-[0px] w-[220px] h-[48px] flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col items-start justify-start relative gap-[0px] text-xl">
                <div className="self-stretch overflow-hidden flex flex-row p-[8px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="flex flex-col items-start justify-start gap-[0px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                      Versions
                    </div>
                    <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[48px] hidden flex-row p-[4px] box-border items-center justify-start">
                      <img
                        className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                        alt=""
                        src="../expandlessfilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] bg-gray-1600 overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] hidden">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
            </div>
            <img
              className="absolute top-[12px] left-[168px] w-[24px] h-[27px] overflow-hidden"
              alt=""
              src="../addfilled3.svg"
            />
          </div>
          <div className="absolute top-[113px] left-[0px] w-[220px] h-[48px]">
            <div className="absolute top-[0px] left-[0px] w-[220px] h-[48px] flex flex-col items-start justify-start gap-[0px]">
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col items-start justify-start relative gap-[0px] text-xl">
                <div className="self-stretch overflow-hidden flex flex-row p-[8px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="flex flex-col items-start justify-start gap-[0px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                      Teams
                    </div>
                    <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[48px] hidden flex-row p-[4px] box-border items-center justify-start">
                      <img
                        className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                        alt=""
                        src="../expandlessfilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] bg-gray-1600 overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden flex flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden hidden flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
              <div className="self-stretch rounded-[4px] overflow-hidden hidden flex-col p-[0px_0px_0px_56px] box-border items-start justify-start relative gap-[0px]">
                <div className="self-stretch overflow-hidden flex flex-row p-[4px_16px] box-border items-center justify-start gap-[0px] z-[0]">
                  <div className="hidden flex-col items-start justify-start gap-[0px]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                    <div className="relative w-[56px] h-[0px] shrink-0 hidden" />
                  </div>
                  <div className="flex-1 flex flex-col p-[4px_0px] box-border items-start justify-start gap-[0px]">
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] hidden">
                      Module name
                    </div>
                    <div className="self-stretch relative tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                      Secondary
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start">
                    <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../starfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute m-[0_!important] w-full right-[0px] bottom-[-1px] left-[0px] [border:1px_solid_rgba(0,_0,_0,_0.12)] box-border h-[1px] shrink-0 hidden z-[1]" />
              </div>
            </div>
            <img
              className="absolute top-[12px] left-[168px] w-[24px] h-[27px] overflow-hidden"
              alt=""
              src="../addfilled4.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[33.29%] top-[27.42%] bottom-[39.3%] left-[calc(50%_-_296px)] w-[880px] text-sm text-indigo-100">
        <div className="absolute h-[97.25%] top-[0%] bottom-[2.75%] left-[calc(50%_-_440px)] w-[880px]">
          <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_440px)] w-[880px]">
            <div className="absolute h-[12.9%] top-[87.1%] bottom-[0%] left-[calc(50%_-_314px)] w-[114px]">
              <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_57px)] overflow-hidden flex flex-row p-[4px_5px] box-border items-center justify-center gap-[8px]">
                <div className="relative w-[16px] h-[18px] shrink-0" />
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../cancelfilled.svg"
                />
                <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium inline-block">
                  Delete
                </div>
                <div className="relative w-[16px] h-[18px] shrink-0 hidden" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-[4px_4px_0px_0px] w-[880px] h-[68.27px] flex flex-row p-[16px] box-border items-center justify-start gap-[0px] text-xl text-gray-1900">
              <div className="flex flex-row p-[0px_16px_0px_0px] box-border items-start justify-start">
                <div className="bg-gray-1800 overflow-hidden flex flex-col items-center justify-center relative gap-[0px]">
                  <div className="rounded-[64px] bg-gray-300 w-[32px] h-[32px] shrink-0 overflow-hidden flex flex-col p-[8px] box-border items-center justify-center z-[0]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../personfilled1.svg"
                      />
                    </div>
                  </div>
                  <div className="absolute m-[0_!important] right-[-2px] bottom-[-2px] rounded-[64px] bg-white w-[12px] h-[12px] shrink-0 hidden z-[1]">
                    <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.66%] left-[16.67%] rounded-[8px] bg-green-200 overflow-hidden" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0px]">
                <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                  Feature Name
                </div>
                <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                  Acme • Atlanta, GA / Remote / San Francisco, CA
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start">
                <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../closefilled.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[68.27px] left-[0px] w-[880px] h-[162.13px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start text-base text-gray-1700">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Exciting news! I’m hiring mid-level and senior Product
                    Designers to join my team at Acme, where we’re building the
                    future of eCommerce.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    &nbsp;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    • Own a product area, work cross-platform
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    • Small, talented, tight-knit team
                  </p>
                  <p className="m-[0]">• SF, ATL or Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[209px] left-[0px] w-[880px] flex flex-row p-[8px] box-border items-center justify-start gap-[8px]">
          <div className="rounded-[4px] overflow-hidden flex flex-col items-center justify-center">
            <div className="overflow-hidden flex flex-row p-[4px_5px] box-border items-center justify-center gap-[8px]">
              <img
                className="relative w-[16px] h-[18px] shrink-0 hidden"
                alt=""
                src="../masked-icon.svg"
              />
              <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium inline-block">
                Update
              </div>
              <img
                className="relative w-[16px] h-[18px] shrink-0 hidden"
                alt=""
                src="../masked-icon1.svg"
              />
            </div>
          </div>
          <div className="rounded-[4px] overflow-hidden flex flex-col items-center justify-center">
            <div className="overflow-hidden flex flex-row p-[4px_5px] box-border items-center justify-center gap-[8px]">
              <img
                className="relative w-[18px] h-[18px] shrink-0"
                alt=""
                src="../masked-icon2.svg"
              />
              <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium inline-block">
                Watch
              </div>
              <img
                className="relative w-[16px] h-[18px] shrink-0 hidden"
                alt=""
                src="../masked-icon1.svg"
              />
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start">
            <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../starfilled6.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[33.29%] top-[60.7%] bottom-[6.01%] left-[calc(50%_-_296px)] w-[880px] text-sm text-indigo-100">
        <div className="absolute h-[97.25%] top-[0%] bottom-[2.75%] left-[calc(50%_-_440px)] w-[880px]">
          <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_440px)] w-[880px]">
            <div className="absolute h-[12.9%] top-[87.1%] bottom-[0%] left-[calc(50%_-_314px)] w-[114px]">
              <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_57px)] overflow-hidden flex flex-row p-[4px_5px] box-border items-center justify-center gap-[8px]">
                <div className="relative w-[16px] h-[18px] shrink-0" />
                <img
                  className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                  alt=""
                  src="../cancelfilled.svg"
                />
                <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium inline-block">
                  Delete
                </div>
                <div className="relative w-[16px] h-[18px] shrink-0 hidden" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-[4px_4px_0px_0px] w-[880px] h-[68.27px] flex flex-row p-[16px] box-border items-center justify-start gap-[0px] text-xl text-gray-1900">
              <div className="flex flex-row p-[0px_16px_0px_0px] box-border items-start justify-start">
                <div className="bg-gray-1800 overflow-hidden flex flex-col items-center justify-center relative gap-[0px]">
                  <div className="rounded-[64px] bg-gray-300 w-[32px] h-[32px] shrink-0 overflow-hidden flex flex-col p-[8px] box-border items-center justify-center z-[0]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../personfilled1.svg"
                      />
                    </div>
                  </div>
                  <div className="absolute m-[0_!important] right-[-2px] bottom-[-2px] rounded-[64px] bg-white w-[12px] h-[12px] shrink-0 hidden z-[1]">
                    <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.66%] left-[16.67%] rounded-[8px] bg-green-200 overflow-hidden" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0px]">
                <div className="self-stretch relative tracking-[0.15px] leading-[150%] inline-block">
                  Feature Name
                </div>
                <div className="self-stretch relative text-base tracking-[0.17px] leading-[143%] text-gray-1700 hidden">
                  Acme • Atlanta, GA / Remote / San Francisco, CA
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start">
                <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../closefilled.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[68.27px] left-[0px] w-[880px] h-[162.13px] overflow-hidden flex flex-col p-[16px] box-border items-start justify-start text-base text-gray-1700">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[0.17px] leading-[143%] inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Exciting news! I’m hiring mid-level and senior Product
                    Designers to join my team at Acme, where we’re building the
                    future of eCommerce.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    &nbsp;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    • Own a product area, work cross-platform
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    • Small, talented, tight-knit team
                  </p>
                  <p className="m-[0]">• SF, ATL or Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[209px] left-[0px] w-[880px] flex flex-row p-[8px] box-border items-center justify-start gap-[8px]">
          <div className="rounded-[4px] overflow-hidden flex flex-col items-center justify-center">
            <div className="overflow-hidden flex flex-row p-[4px_5px] box-border items-center justify-center gap-[8px]">
              <img
                className="relative w-[16px] h-[18px] shrink-0 hidden"
                alt=""
                src="../masked-icon.svg"
              />
              <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium inline-block">
                Update
              </div>
              <img
                className="relative w-[16px] h-[18px] shrink-0 hidden"
                alt=""
                src="../masked-icon1.svg"
              />
            </div>
          </div>
          <div className="rounded-[4px] overflow-hidden flex flex-col items-center justify-center">
            <div className="overflow-hidden flex flex-row p-[4px_5px] box-border items-center justify-center gap-[8px]">
              <img
                className="relative w-[18px] h-[18px] shrink-0"
                alt=""
                src="../masked-icon2.svg"
              />
              <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium inline-block">
                Watch
              </div>
              <img
                className="relative w-[16px] h-[18px] shrink-0 hidden"
                alt=""
                src="../masked-icon1.svg"
              />
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start">
            <div className="rounded-[48px] flex flex-row p-[12px] box-border items-center justify-start">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../starfilled6.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[80px] left-[275px] w-[325px] h-[31px] flex flex-row items-center justify-start gap-[0px] text-xl">
        <div className="h-[16px] hidden flex-row items-start justify-start">
          <img
            className="self-stretch relative max-h-full w-[16px] shrink-0 overflow-hidden"
            alt=""
            src="../starfilled58.svg"
          />
        </div>
        <div className="bg-gray-1800 h-[16px] hidden flex-col items-start justify-start">
          <div className="flex-1 relative bg-gray-1800 w-[8px]">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[0.15px] leading-[150%] inline-block">{`Home  `}</div>
        </div>
        <div className="w-[23px] shrink-0 flex flex-col items-center justify-start">
          <div className="relative tracking-[0.15px] leading-[150%] inline-block w-[7px] h-[24px] shrink-0">
            /
          </div>
        </div>
        <div className="h-[16px] hidden flex-row items-start justify-start">
          <img
            className="self-stretch relative max-h-full w-[16px] shrink-0 overflow-hidden"
            alt=""
            src="../starfilled58.svg"
          />
        </div>
        <div className="bg-gray-1800 h-[16px] hidden flex-col items-start justify-start">
          <div className="flex-1 relative bg-gray-1800 w-[8px]">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[0.15px] leading-[150%] inline-block">
            Feature
          </div>
        </div>
        <div className="w-[23px] shrink-0 flex flex-col items-center justify-start">
          <div className="relative tracking-[0.15px] leading-[150%] inline-block w-[7px] h-[24px] shrink-0" />
        </div>
        <div className="h-[16px] hidden flex-row items-start justify-start">
          <img
            className="self-stretch relative max-h-full w-[16px] shrink-0 overflow-hidden"
            alt=""
            src="../starfilled60.svg"
          />
        </div>
        <div className="bg-gray-1800 h-[16px] hidden flex-col items-start justify-start">
          <div className="flex-1 relative bg-gray-1800 w-[8px]">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_4px)] w-[8px]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-gray-1900">
          <div className="relative tracking-[0.15px] leading-[150%] inline-block" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
